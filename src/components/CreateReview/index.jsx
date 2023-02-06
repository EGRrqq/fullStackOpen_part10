import ReviewContainer from './Container';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { REVIEW } from '../../graphql/mutations';

const CreateReview = () => {
  const navigate = useNavigate();
  const [mutate] = useMutation(REVIEW, {
    onCompleted: (data) => {
      if (data.createReview) {
        navigate(`/${data.createReview.repositoryId}`);
      }
    },
  });

  const submit = (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      mutate({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: Number(rating),
            text,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer onSubmit={submit} />;
};

export default CreateReview;