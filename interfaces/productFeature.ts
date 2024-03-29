export interface ProductFeature{
    title : string,
    leftImg : string,
    leftTitle : string,
    rightImg : string,
    rightTitle : string,
    label : string,
    productFeatureDetail : productFeatureDetail [],
    buttonName : string
}

interface productFeatureDetail{
    img : string,
    name : string,    
}