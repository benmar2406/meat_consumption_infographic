import cowImg from '/assets/img/icons/cow.png'

const alt = "cow"

const CowIcon = () => {
    return(
        <div className='cow-icon'>
            <img src={cowImg} />
        </div>
    )
}

export default CowIcon;