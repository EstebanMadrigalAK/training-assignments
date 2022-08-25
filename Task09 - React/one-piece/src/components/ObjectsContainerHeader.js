/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

function ObjectContainerHeader(props){
    return(
        <div className="section-header">
            <b className="section-title">{props.title}</b>
            <a className="see-all-btn" href={props.refLink}>See all</a>
        </div>
    );
}

export default ObjectContainerHeader;