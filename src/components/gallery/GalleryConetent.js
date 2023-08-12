import React, {useState, useEffect} from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import images from '../../API/images';
import './GalleryContent.css';
import TagButton from './TagButton';
import { useFetchInteriorGalleryQuery } from '../../store/store';



const GalleryConetent = () => {
    const [tag, setTag] = useState('all')
    const [filteredImages, setFilteredImages] = useState([])
    console.log("image", images)
    const {
        data: data,
        isLoading: loading,
       
      } = useFetchInteriorGalleryQuery();
    useEffect(() => {
        if(data){
            console.log(tag)
            tag === 'all' ? setFilteredImages(data) : setFilteredImages(data.filter( image => image.tag === tag))
            
        }
        console.log("img",filteredImages)
    }, [tag,data]

    );

    const reverseFilteredImages= [...filteredImages].reverse()
    console.log('reverseFilteredImages: ', reverseFilteredImages);
    return (
        <div className='gallery-container' handleSetTag={setTag}>
            <div className="tags tag-buttons">
                <TagButton name="all" handleSetTag={setTag} tagActive={ tag === 'all' ? true : false }/>
                <TagButton name="COMMERCIAL" handleSetTag={setTag} tagActive={ tag === 'COMMERCIAL' ? true : false }/>
                <TagButton name="HOME INTERIOR" handleSetTag={setTag} tagActive={ tag === 'HOME INTERIOR' ? true : false }/>
                <TagButton id="retail" name="RETAIL SHOP" handleSetTag={setTag} tagActive={ tag === 'RETAIL SHOP' ? true : false }/>
            </div>
            <SRLWrapper>
                 {data?
            <div className='image-container'>

                {reverseFilteredImages.map(image => 
                    
                    <div key={image.id} className='image-card'>
                    <a href={`${image.image}`}>
                        <img className='image' src={`${image.image}`} alt='' />
                    </a>
                </div>)
                }
            </div>:null
                }
            {/* <img src="https://www.spacemate.in/image/img/ss2.png" alt="" /> */}
            </SRLWrapper>
        </div>
    )
}

export default GalleryConetent
