import React from 'react';
import './Blogs.css';
import { Accordion } from 'react-bootstrap'

const Blogs = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <Accordion className='w-100 mx-auto shadow' defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Difference between javascript and nodejs.</Accordion.Header>
            <Accordion.Body>
              <p>
                <span className="fw-bold">1. JavaScript : </span>
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
              </p>
              <p>
                <span className="fw-bold">2. NodeJS : </span>
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
            <Accordion.Body>
              <p className='fw-bold m-0'> When to use MongoDB?</p>
              <p>MongoDB can be used in places that require simple queries, easy and fast integration of data and have data whose structure changes constantly with time.</p>
              <p className='fw-bold m-0'> When to use Node Js?</p>
              <p>As we have found that Node. js can ensure great speed and performance, one of the textbook Node. js use cases is real-time messaging, or chatting. The environment can support heavy traffic of multiple short messages, or chatrooms when messages are displayed to many users at the same time.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
            <Accordion.Body>
              <h3>Type -</h3>
              <p>SQL databases are primarily called as Relational Databases (RDBMS);</p>
              <p>Whereas NoSQL database are primarily called as non-relational or distributed database.</p>
              <h3>Language -</h3>
              <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries.</p>
              <p>A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
            <Accordion.Body>
              <h3> What Is JWT?</h3>
              JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
              <h3> How JWT Works?</h3>
              JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Blogs;