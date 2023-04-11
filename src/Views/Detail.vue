<template>
    <h1>Nama Product : {{ detail.nama }}</h1>
    <h4>Harga : {{ detail.harga }}</h4>
</template>
<script>
import {product} from '@/assets/product'

export default{
props: [
    "id_product"
],
setup(props){
    const detail = product["product"].find(function(item){
return item.id == props.id_product;
    });
    return{
        detail
    }
    
}
}

</script>