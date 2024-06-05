import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

function App() {
    const [currentCategory, setCurrentCategory] = useState("");
    const [productsData, setProductsData] = useState([]);
    const [cart, setCart] = useState([]);// Bu state ürünlerin sepete eklendiği diziyi tutacak
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    function handleClick(categoryName) {
        setCurrentCategory(categoryName);
    }

    function addToCart(product) {
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) { // yani varsa 
            const updatedCart = [...cart]; // mevcut sepet güncellenecek sepete aktarıldı
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]); // Ürünün tüm özelliklerini ekleyin ve quantity 1 olarak ayarlayın
        }
        alertify.success(product.productName + " Ürünü Sepete Eklendi"); // Bildirimi doğru bir şekilde kullanmak
    }

    function removeFromCart(product) {
        let newCart = cart.filter(c => c.id !== product.id); // gelen id'ye ait olmayan tüm id'ler alınır böylece tıkladığın hariç yeni bir liste oluşturulur
        setCart(newCart);
        alertify.error(product.productName + " Ürünü Sepetten Silindi");
    }

    useEffect(() => {
        let selectedCategory = null; // seçilecek kategori üretiliyor
        if (currentCategory) {
            fetch("http://localhost:3000/categories") //  tüm kategoriler çekiliyor
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json(); // kategori listesi json'a dönüştürülüyor
                })
                .then(data => {
                    selectedCategory = data.find(category => category.categoryName === currentCategory); // eğer seçilen kategori kategori listesinde varsa selectedCategory'ye aktarılır
                    let url = "http://localhost:3000/products"; // sonrasında products'ları çekmek için genel bir url oluşturuluyor
                    if (selectedCategory) {
                        url += `?categoryId=${selectedCategory.id}`; // seçilen kategori listede varsa url'in sonuna o kategorinin id'si ile almak için url düzeltiliyor
                    }
                    fetch(url)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            return response.json();
                        })
                        .then(data => {
                            setProductsData(data); // Ürün verilerini state'e atıyoruz
                        })
                        .catch(error => {
                            console.error("There was a problem with the fetch operation:", error);
                        });
                })
                .catch(error => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        } else {
            fetch("http://localhost:3000/products")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    setProductsData(data); // Ürün verilerini state'e atıyoruz
                })
                .catch(error => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        }
    }, [currentCategory]);

    return (
        <div>
            <Container>
                <Navi cart={cart} removeFromCart={removeFromCart} />
                <Row>
                    <Col xs="3">
                        <CategoryList
                            info={categoryInfo}
                            currentCategory={currentCategory}
                            handleClick={handleClick}
                        />
                    </Col>
                    <Col xs="9">
                        <Routes>
                            <Route exact path="/" element={
                                <ProductList
                                    products={productsData}
                                    info={productInfo}
                                    currentCategory={currentCategory}
                                    addToCart={addToCart}
                                />
                            } />
                            <Route exact path="/cart" element={
                                <CartList
                                    cart={cart}
                                    removeFromCart={removeFromCart}
                                />
                            } />
                            <Route path="/form1" Component={FormDemo1}></Route>
                            <Route path="/form2" Component={FormDemo2}></Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
