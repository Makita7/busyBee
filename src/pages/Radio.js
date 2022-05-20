import Iframe from 'react-iframe'

function Radio() {
  return (
    <div className="radio">
      <h3 className="">Radio</h3>

      <Iframe
          width="50%"
          src="https://www.youtube.com/embed/5qap5aO4i9A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          >
      </Iframe>

      <Iframe
        width="50%"
        src="https://www.youtube.com/embed/-5KAN9_CzSA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </Iframe>

    </div>
  );
}

export default Radio;