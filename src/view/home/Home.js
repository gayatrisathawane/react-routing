import Navbar from "../../component/navbar/Navbar";
import Card from "../../component/card/Card";
import Button from "../../component/button/Button";
import Footer from "../../component/footer/footer"

export default function Home()
{
    return(
        <>
        <Navbar/>
        <Card text='Gayatri Sathawane' clg="Tgpcet" />
        <Card text='Shewta Paund'  clg="SBUP"/>
        <Card text='vaibhavi Hole'  clg="RTC" />
        <Card text='Aakansha Dahekar'  clg="Tgpcet"/>
        <Button text="Click me"/>
        <Button text="Cancle"/>
        <Button text="Buy Now"/>
        <Footer/>


        </>
    );
}