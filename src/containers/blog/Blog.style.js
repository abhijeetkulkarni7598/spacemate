import styled from "styled-components";

export const BlogStyle = styled.div`
  background: #f1f1f1;
  
  flex-direction: row;

  /*PEN STYLES*/
  .blog-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-size: 1.5rem;

  }

  .blog-card {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
    min-width: 400px;
    margin: 2rem;
    a {
      color: inherit;
      &:hover {
        color: var(--primary-color);
      }
    }
    &:hover {
      .photo {
        transform: scale(1) rotate(1deg);
      }
    }
    .meta {
      position: relative;
      z-index: 0;
      height: 200px;
    }
    .photo {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.2s;
    }
    .details,
    .details ul {
      margin: auto;
      padding: 0;
      list-style: none;
    }

    .details {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -100%;
      margin: auto;
      transition: left 0.2s;
      background: rgba(#000, 0.6);
      color: #fff;
      padding: 10px;
      width: 100%;
      font-size: 0.9rem;
      display: none;
      a {
        text-decoration: dotted underline;
      }
      ul li {
        display: inline-block;
      }
      .author:before {
        font-family: FontAwesome;
        margin-right: 10px;
        content: "\f007";
      }

      .date:before {
        font-family: FontAwesome;
        margin-right: 10px;
        content: "\f133";
      }

      .tags-blog-blog-blog {
        ul:before {
          font-family: FontAwesome;
          content: "\f02b";
          margin-right: 10px;
        }
        li {
          margin-right: 2px;
          &:first-child {
            margin-left: -4px;
          }
        }
      }
    }
    .description {
      padding: 1rem;
      background: #fff;
      position: relative;
      z-index: 1;
      h1,
      h2 {
        font-family: Poppins, sans-serif;
      }
      h1 {
        line-height: 1;
        margin: 0;
        font-size: 1.7rem;
      }
      h2 {
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #000;
        margin-top: 5px;
      }
      .read-more {
        text-align: right;
        a {
          color: var(--primary-color);
          display: inline-block;
          position: relative;
          &:after {
            /* content: "\f105"; */
            font-family: FontAwesome;
            margin-left: -10px;
            opacity: 0;
            vertical-align: middle;
            transition: margin 0.3s, opacity 0.3s;
            color: #000;
          }
          &:hover {
            color: #000;
          }

          &:hover:after {
            margin-left: 5px;
            opacity: 1;
          }
        }
      }
    }
    p {
      position: relative;
      margin: 1rem 0 0;
      &:first-of-type {
        margin-top: 1.25rem;
        &:before {
          content: "";
          position: absolute;
          height: 5px;
          background: var(--primary-color);
          width: 35px;
          top: -0.75rem;
          border-radius: 3px;
        }
      }
    }
    &:hover {
      .details {
        left: 0%;
      }
    }

    @media (min-width: 640px) {
      flex-direction: row;
      max-width: 600px;
      .meta {
        flex-basis: 40%;
        height: auto;
      }
      .description {
        flex-basis: 60%;
        &:before {
          transform: skewX(-3deg);
          content: "";
          background: #fff;
          width: 30px;
          position: absolute;
          left: -10px;
          top: 0;
          bottom: 0;
          z-index: -1;
        }
      }
      &.alt {
        flex-direction: row-reverse;
        .description {
          &:before {
            left: inherit;
            right: -10px;
            transform: skew(3deg);
          }
        }
        .details {
          padding-left: 25px;
        }
      }
    }
  }
`;
