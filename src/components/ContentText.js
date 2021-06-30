import classes from './ContentText.module.css'

const ContentText = ()=> {
    return (
        <div className={classes.content_text}>
            <h1 className={classes.heading}>We're Coming Soon</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
            </p>
        </div>
    );
}

export default ContentText;
