import PropTypes from 'prop-types';
import { MultiChatSocket, MultiChatWindow, useMultChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultChatLogic('2c9b8f35-faae-48fd-9c98-bae38a0ecdfe', props.user.username, props.user.secret);

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    secret: PropTypes.string,
  }),
};

export default ChatsPage;
