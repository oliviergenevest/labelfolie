import React from 'react';

const PlayerZik = ({urlPlayer, ...props}) => {
 /*console.log(props)*/
return (
  props.soundcloud && <iframe 
  width="100%" 
  height="300" 
  scrolling="no" 
  frameBorder="no" 
  title="soundcloud"
  allow="autoplay" 
  src={'https://w.soundcloud.com/player/?url='+urlPlayer+'&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false&visual=false'}>
    </iframe>
  
   
         
   
     
)
 }
export default PlayerZik;
