import {useEffect, useState} from "react";
import ListCatego from "../../component/catego/list";
import {BaseUrl} from "../../BaseUrl";
import HomeAdmin from "./Home";
import {Footer} from "../../component/MenuCli/Footer";
const style = {
    "color": "#262626"
}
function ListeCategorie() {
        const [list,setList] = useState(null);
    useEffect(() => {
        fetch(BaseUrl+"enchere/admin/categorie")
            .then((response) => response.json())
            .then((data) => {
                setList(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <HomeAdmin />
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className={"container"}>
                            <h1>liste des categories</h1>

                            <table  className="table table-hover">
                            <thead>
                            <tr>
                                <th>idCategorie</th>
                                <th>Categorie</th>
                                <td></td>
                            </tr>
                            </thead>
                            <tbody>
                            {list?.map((res)=>ListCatego(res))}
                            </tbody>
                        </table>
                        </div>
                        {/*<div className="carousel-item active">*/}
                        {/*    <div className="container">*/}
                        {/*        <h1 className="fashion_taital">Electronic</h1>*/}
                        {/*        <div className="fashion_section_2">*/}
                        {/*            <div className="row">*/}
                        {/*                <div className="col-lg-4 col-sm-4">*/}
                        {/*                    <div className="box_main">*/}
                        {/*                        <h4 className="shirt_text">Laptop</h4>*/}
                        {/*                        <p className="price_text">Start Price <span style={style}>$ 100</span>*/}
                        {/*                        </p>*/}
                        {/*                        <div className="electronic_img"><img src="images/laptop-img.png" /></div>*/}
                        {/*                        <div className="btn_main">*/}
                        {/*                            <div className="buy_bt"><a href="#">Buy Now</a></div>*/}
                        {/*                            <div className="seemore_bt"><a href="#">See More</a></div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                /!*---*!/*/}
                        {/*                <div className="col-lg-4 col-sm-4">*/}
                        {/*                    <div className="box_main">*/}
                        {/*                        <h4 className="shirt_text">Mobile</h4>*/}
                        {/*                        <p className="price_text">Start Price <span style={style}>$ 100</span>*/}
                        {/*                        </p>*/}
                        {/*                        <div className="electronic_img"><img src="images/mobile-img.png" /></div>*/}
                        {/*                        <div className="btn_main">*/}
                        {/*                            <div className="buy_bt"><a href="#">Buy Now</a></div>*/}
                        {/*                            <div className="seemore_bt"><a href="#">See More</a></div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                /!*--*!/*/}
                        {/*                <div className="col-lg-4 col-sm-4">*/}
                        {/*                    <div className="box_main">*/}
                        {/*                        <h4 className="shirt_text">Computers</h4>*/}
                        {/*                        <p className="price_text">Start Price <span style={style}>$ 100</span>*/}
                        {/*                        </p>*/}
                        {/*                        <div className="electronic_img"><img src="images/computer-img.png" />*/}
                        {/*                        </div>*/}
                        {/*                        <div className="btn_main">*/}
                        {/*                            <div className="buy_bt"><a href="#">Buy Now</a></div>*/}
                        {/*                            <div className="seemore_bt"><a href="#">See More</a></div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        /!*    --*!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
            <Footer />
            {/*<div className="container">*/}
            {/*    <h1>Liste des categorie</h1>*/}
            {/*    <table className="table">*/}
            {/*        <thead>*/}
            {/*        <tr>*/}
            {/*            <td>idCategorie</td>*/}
            {/*            <td>Categorie</td>*/}
            {/*            <td></td>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*             {list?.map((res)=>ListCatego(res))}*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}
        </>
    );
}

export default ListeCategorie;