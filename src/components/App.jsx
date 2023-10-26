import ButtonItem from "components/Button/Button";
import ImageGallery from "components/ImageGallery/ImageGallery";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import Modal from "components/Modal/Modal";
import Searchbar from "components/Searchbar/Searchbar";
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
