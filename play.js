{
  "user": "xpacemate2",
  "email": "",
  "roles": [
      "ADMIN"
  ]
}
get this data in this formate
{
  "id": 18,
  "last_login": null,
  "is_superuser": false,
  "username": "xpacemate2",
  "first_name": "",
  "last_name": "",
  "email": "",
  "is_staff": false,
  "is_active": true,
  "date_joined": "2024-02-14T08:24:21.120055Z",
  "groups": [],
  "user_permissions": []
}
 my code ===@api_view(["GET"])
 def userinfo(request):
     print("Request user:", request.user)  # Check if request.user is populated
     if request.user.is_authenticated:
         user = request.user
         try:
             profile = UserProfile.objects.get(user=user)
             roles = []
 
             if profile.is_admin:
                 roles.append("ADMIN")
             
 
             if roles:
                 data = {"user": user.username, "email": user.email, "roles": roles}
                 return Response(data)
             else:
                 return Response({"message": "You are not assigned any roles"})
         except UserProfile.DoesNotExist:
             return Response({"message": "UserProfile does not exist"})
     else:
         return Response({"message": "Login first"})
 