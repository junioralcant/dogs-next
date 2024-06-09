import {Photos} from '@/actions/photos-get';
import FeedPhotos from './feed-photo';

export default function Feed({photos}: {photos: Photos[]}) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
