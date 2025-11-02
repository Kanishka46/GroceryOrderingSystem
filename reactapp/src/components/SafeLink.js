import React from 'react';

import {Link,useInRouterContext} from 'react-router-dom';

const SafeLink=({to,children,...props})=>

{

    const inRouter=useInRouterContext();

    if(inRouter)

    {

        return <Link to={to}{...props}>{children}</Link>
    }

    return <span{...props}>{children}</span>
}

export default SafeLink;