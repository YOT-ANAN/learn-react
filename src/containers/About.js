import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container col-md-5">
        <h3>สวัสดีวันดีครับ</h3>
        <p className="title text-justify mt-4 mt-4">ทดสอบเรียนรู้ React</p>
        <h3 className="text-success">สวัสดีวันจันทร์</h3>
      </div>
      <Footer  company="PSU" email="5910110270@psu.ac.th"/>
    </div>
  );
};
export default About;
