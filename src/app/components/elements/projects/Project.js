import React from "react";
import FontAwesome from 'react-fontawesome';
import stars from 'images/five-stars'
import framework from 'images/projects/framework';
import genesis from 'images/projects/genesis';
import tcp from 'images/projects/tcp';
import sidebar from 'images/projects/sidebar';
import kodenta from 'images/projects/kodenta';
import practicology from 'images/projects/practicology';
import datasouth from 'images/projects/datasouth';
import wimbledon from 'images/projects/wimbledon';
import brimstone from 'images/projects/brimstone';
import russellfinex from 'images/projects/russellfinex';
import responsive from 'images/projects/responsive';


export const ProjectFront = props => {
  return (
    <div
      className={`projectcont`}
      style={{
        backgroundImage: `url(${props.img})`
      }}
    />
  );
};

export const ProjectBack = props => {
  return (
    <div className="projectcont">
      <h3><strong><span className="highlight">{props.title}</span></strong></h3>
      <a href={props.url} rel="nofollow" target="_blank">
        
      View Site
      </a>
      {(props.review !== null) ? <a rel="nofollow" target="_blank" className="fivestars" href={props.review}><img src={stars} alt="5 stars"/><br /> See Reviews</a> : null}
      
    </div>
  );
};
