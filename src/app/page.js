"use client";

import Hero from "@/components/layout/hero";
import CardCategory from "@/components/ui/CardCategory";
import CardProduct from "@/components/ui/CardProduct";
import Modal from "@/components/ui/Modal";
import Pagination from "@/components/ui/Pagination";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Dropdown from "@/components/ui/Dropdown";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import FileUpload from "@/components/ui/FileUpload";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(10);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasikan pemuatan data
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Product 1", description: "Description 1", image: "/path/to/image1.jpg", price: 100 },
        { id: 2, name: "Product 2", description: "Description 2", image: "/path/to/image2.jpg", price: 200 },
      ]);
      setCategories([
        { name: "Category 1", description: "Description 1" },
        { name: "Category 2", description: "Description 2" },
        { name: "Category 3", description: "Description 3" },
      ]);
      setLoading(false);
    }, 2000); // Simulasikan waktu pemuatan
  }, []);

  const handlePageChange = (selectedItem) => {
    // Logika untuk perubahan halaman
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Logika untuk perubahan kategori
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  const handleFileDrop = (acceptedFiles) => {
    console.log("Files uploaded:", acceptedFiles);
  };

  return (
    <div className="flex flex-col md:px-24 px-10 py-[5.5rem]">
      <Head>
        <title>MiniMiracle</title>
      </Head>
      <Hero>
        <div>
          <h3>Kategori</h3>
          <Dropdown
            options={categories.map((cat) => cat.name)}
            onChange={handleCategoryChange}
            className="mb-4"
          />
          {categories.map((category) => (
            <CardCategory key={category.name} category={category} />
          ))}
        </div>
      </Hero>
      {loading ? (
        <LoadingSpinner size="large" color="blue" className="mt-8" />
      ) : (
        <>
          <div className="product-list grid lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          <Button
            className="mt-4 bg-blue-500 text-white rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Open Modal
          </Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Form onSubmit={handleFormSubmit} className="space-y-4">
              <Input
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                label="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <FileUpload onDrop={handleFileDrop} className="mt-4" />
              <Button type="submit" className="mt-4 bg-green-500 text-white rounded">
                Submit
              </Button>
            </Form>
          </Modal>
        </>
      )}
    </div>
  );
}
