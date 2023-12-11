from rest_framework import viewsets
from rest_framework.response import Response
from django.db.models import Q
from datetime import datetime

# Your existing code...

class RevinueViewSet(viewsets.ViewSet):
    def list(self, request):
        year = request.query_params.get('year')

        # Define a function to convert your DD/MM/YY string to a Python date
        def convert_date(date_str):
            return datetime.strptime(date_str, '%d/%m/%y')

        # Function to calculate total cost by month
        def get_total_cost_by_month_and_year(year):
            queryset = Quotation.objects.filter(date__contains=year)

            # Calculate total cost per month
            monthly_costs = {}
            for entry in queryset:
                month = convert_date(entry.date).strftime('%B')  # Get month name
                cost = entry.total_with_discount  # Replace with your actual cost field
                monthly_costs[month] = monthly_costs.get(month, 0) + cost

            return monthly_costs

        if year:
            results = get_total_cost_by_month_and_year(year)
            return Response(results)
        else:
            return Response({"error": "Please provide a year"}, status=400)



from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from datetime import datetime

class RevinueViewSet(APIView):
    def get(self, request):
        year = request.query_params.get('year')

        def get_monthly_total_costs(year):
            quotations = Quotation.objects.filter(date__contains=year)
            monthly_costs = {}

            for quotation in quotations:
                if quotation.date:
                    date_parts = quotation.date.split('/')  # Assuming date is in DD/MM/YY format
                    if len(date_parts) == 3:
                        month_name = datetime.strptime(quotation.date, '%d/%m/%y').strftime('%B')
                        cost = float(quotation.total_with_discount or 0)
                        monthly_costs[month_name] = monthly_costs.get(month_name, 0) + cost

            return monthly_costs

        if year:
            results = get_monthly_total_costs(year)
            return Response(results)
        else:
            return Response({"error": "Please provide a year"}, status=400)
[
    {month:1,
     total_cost:100,
     quotations:2},
    {month:2,
     total_cost:100,
     quotations:5},
]