import styles18 from './toplist.module.css';


function Toplist(props) {



    return(
        <div>
            <div className={styles18.container}>
                <div className={styles18.wrapper}>
                    <div className={styles18.item}>
                        <div className={styles18.imgarea}>
                            <img src={props.Image} width={130} height={130}></img>
                        </div>
                            <h3>{props.Name}</h3>
                            <p><b>{"Rs.₹"}{props.Price}/-</b></p>
                            <p><b>{props.Offer}{"% Offer"}</b></p>
                        </div>
                </div>
            </div>
        </div>
    );
}


export default Toplist;