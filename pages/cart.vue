<template>
  <div style="">
    <h1>장바구니</h1>
    
    <CartList></CartList>
    <div class="btn-box">
      <button type="button">구매하기</button>
      <button type="button" 
      @click="deleteCartItem(checkboxList)"
      >삭제하기</button>
    </div>
  </div>
</template>

<script setup>

// 선택된 항목 삭제
const deleteCartItem = async (idList) => {
  idList.forEach((id) => {
    const index = cartStore.cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      cartStore.cartItems.splice(index, 1);
    }
  });
  checkboxList.value = [];
  console.log("Delete check ))):", cartStore.cartItems);
};


</script>

<style scoped >
.clickable{
  cursor: pointer;
  width: 100%;
}

.cart-list{
  /* border: 1px solid red; */
  margin-left:3% ;
  margin-top:1% ;
  display: flex;
  justify-content: start;
  align-items: center; 
  gap:1%;
}

.product-image {
  width: 150px;
  height: 150px;
}

.btn-box{
  /* border: 1px solid green; */
  width: 90%;
  position: sticky;
  float: right;
  bottom: 50px;
  display: flex;
  justify-content: end;
  align-items: center; 
  gap:2%
}
</style>
