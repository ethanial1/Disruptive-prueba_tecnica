import './file_card.css';

export function FileCard({ content, category, title, credito, showImage }) {
  return (
    <div className='file_card'>
      <div className='file_card_inner'>
        {(category === 'imagen' || showImage) && <div className='file_card_inner_img'>
          <img src={content} alt="Imagen" />
        </div>}
        {category === 'video' && <VideoIframe url={content} />}
        {title && <p className='f-subtitle' style={{padding: '10px 20px'}}>{title}</p>}
        {category === 'texto' && <div className='file_card_inner_text'>
          <p>{content}</p>
        </div>}
        {credito && <p className='file_card_inner_text'>Creditos: {credito}</p>}
      </div>
      <span className='file_card_inner_category'>{category}</span>
    </div>
  )
}

function VideoIframe({ url }) {
  return (
    <iframe
      width="220"
      height="150px"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen>
    </iframe>
  )
}
