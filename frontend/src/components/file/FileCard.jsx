import './file_card.css';

export function FileCard({ content, category, title }) {
  return (
    <div className='file_card'>
      <div className='file_card_inner'>
        {category === 'imagen' && <div className='file_card_inner_img'>
          <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>}
        {category === 'video' && <VideoIframe url="" />}
        {title && <p className='file_card_inner_text'>{title}</p>}
        {category === 'text' && <div className='file_card_inner_text'>
          <p>{content}</p>
        </div>}
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
      src="https://www.youtube.com/embed/QbQuNyEgMvY?si=rbKr4J0K-w8FT8tT"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen>
    </iframe>
  )
}
