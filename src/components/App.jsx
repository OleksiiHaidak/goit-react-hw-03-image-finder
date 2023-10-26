import ButtonItem from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import css from 'components/styles.css'

// Your API key: 39445880-54b6798b916331fa60d6cbc62

export const App = () => {
  return (
    <div>
      <ButtonItem />
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Modal />
      <Searchbar/>
    </div>
  );
};
