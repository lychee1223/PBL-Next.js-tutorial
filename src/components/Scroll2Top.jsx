function ToTop(){
    return (
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    )
}

function Scroll2Top() {
    <Button onClick={ToTop}>aaa</Button>

}

export default Scroll2Top;