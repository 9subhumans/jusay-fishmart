import React, { useState, useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FileUploader } from "react-drag-drop-files";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toBase64 } from '@/utils/file';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast, ToastContainer } from 'react-toastify';
import jwt from 'jsonwebtoken';

import AdminTemplate from '@/components/AdminTemplate';
import { ToastContext } from '@/contexts/ToastContext';

const fileTypes = ["JPG", "PNG", "WEBP"];
const moneyRegExp = /^\$?[0-9]+(\.[0-9][0-9])?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  image: Yup.string(),
  unit: Yup.string().required('Unit is required'),
  price: Yup.string()
    .required('Price is required')
    .matches(moneyRegExp, 'Price must be a valid money value'),
  quantity: Yup.string(),
  description: Yup.string(),
});

const initialValues = {
  name: '',
  image: '',
  unit: 'KG',
  price: 0,
  quantity: 0,
  description: '',
};

const AddProductForm = () => {
  const toast = useContext(ToastContext);

  const handleImageChange = (file) => {
    setFile(file);
  }

  const handleSubmit = async (values) => {
    const response = await axios.post('/api/products', values);
    
    if (response.statusText === 'OK') {
      toast.show('Product successfully created');

      setTimeout(() => {
        Router.push('/admin/products');
      }, (1000));
    }
  }

  return (
    <AdminTemplate size={5}>
      <div className="p-5">
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <FormikForm>
                <div>
                  <div className="form-group mb-4">
                    <Form.Label>Image</Form.Label>
                    <FileUploader
                      name="image"
                      types={fileTypes}
                      handleChange={async (file) => {
                        const selected = await toBase64(file);
                        formik.setFieldValue('image', selected);
                      }}
                    />

                    {
                      formik.values?.image && (
                        <div className="d-flex justify-content-center">
                          <Image
                            src={formik.values.image}
                            alt="Product image"
                            width={150}
                            height={120}
                          />
                        </div>
                      )
                    }
                    <div>

                    </div>
                  </div>
                </div>

                <div>
                  <div className="form-group mb-4">
                    <Form.Label>Product Name</Form.Label>
                    <Field
                      as={Form.Control}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      type="text"
                      name="name"
                    />
                    <Form.Control.Feedback className={!formik.values.name ? 'd-block' : ''} type="invalid">
                      {formik.errors.name}
                    </Form.Control.Feedback>
                  </div>
                </div>

                <div>
                  <div className="form-group mb-4">
                    <Form.Label>Unit</Form.Label>
                    <Field
                      as={Form.Select}
                      value={formik.values.unit}
                      name="unit"
                      onChange={formik.handleChange}
                    >
                      <option value='KG'>Per Kilo</option>
                      <option value='PC'>By Piece</option>
                      <option value='BK'>Bucket</option>
                    </Field>
                    <Form.Control.Feedback className={!formik.values.unit ? 'd-block' : ''} type="invalid">
                      {formik.errors.unit}
                    </Form.Control.Feedback>
                  </div>
                </div>

                <div>
                  <div className="form-group mb-4">
                    <Form.Label>Price</Form.Label>
                    <Field
                      as={Form.Control}
                      type="number"
                      name="price"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                    />
                    <Form.Control.Feedback className={!formik.values.price ? 'd-block' : ''} type="invalid">
                      {formik.errors.price}
                    </Form.Control.Feedback>
                  </div>
                </div>

                <div>
                  <div className="form-group mb-4">
                    <Form.Label>Quantity</Form.Label>
                    <Field
                      as={Form.Control}
                      type="number"
                      name="quantity"
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="form-group mb-4">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      as="textarea"
                      name="description"
                    />
                    <Form.Control.Feedback className={!formik.values.description ? 'd-block' : ''} type="invalid">
                      {formik.errors.description}
                    </Form.Control.Feedback>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                <Link href="/admin/products">
                  <Button variant="default">
                    Back to Products
                  </Button>
                </Link>
                <Button type="submit" disabled={!formik.isValid}>
                  Submit
                </Button>
                </div>
              </FormikForm>
            )}
          </Formik>
      </div>
    </AdminTemplate>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, process.env.APPSECRET);

    if (!decoded) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {}
    };
  } catch {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}

export default AddProductForm;
