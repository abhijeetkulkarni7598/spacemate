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

    useEffect(() => {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
    }, [tag]
    );
    const {
        data: data,
        isLoading: loading,
       
      } = useFetchInteriorGalleryQuery();
    const reverseFilteredImages= [...filteredImages].reverse()
    console.log('reverseFilteredImages: ', reverseFilteredImages);
    return (
        <div className='gallery-container' handleSetTag={setTag}>
            <div className="tags tag-buttons">
                <TagButton name="all" handleSetTag={setTag} tagActive={ tag === 'all' ? true : false }/>
                <TagButton name="commercial" handleSetTag={setTag} tagActive={ tag === 'commercial' ? true : false }/>
                <TagButton name="home interior" handleSetTag={setTag} tagActive={ tag === 'home interior' ? true : false }/>
                <TagButton id="retail" name="retail shop" handleSetTag={setTag} tagActive={ tag === 'retail shop' ? true : false }/>
            </div>
            <SRLWrapper>
            <div className='image-container'>
                 
                {reverseFilteredImages.map(image => 
                    
                <div key={image.id} className='image-card'>
                    <a href={`/images/${image.imageName}`}>
                        <img className='image' src={`/images/${image.imageName}`} alt='' />
                    </a>
                </div>)
                }
            </div>
            {/* <img src="https://www.spacemate.in/image/img/ss2.png" alt="" /> */}
            </SRLWrapper>
        </div>
    )
}

export default GalleryConetent
