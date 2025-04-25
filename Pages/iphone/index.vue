<template>
  <div>
    <div>
      <ur class="list-none flex-ur">
        <li class="clickablue">
          <img width="150" src="/images/iphone12.jpg" />
        </li>
        <li class="clickablue">
          <img width="150" src="/images/iphone12-mini.jpg" />
        </li>
        <li class="clickablue">
          <img width="150" src="/images/iphone12-pro.jpg" />
        </li>
        <li class="clickablue">
          <img width="150" src="/images/iphone13.jpg" />
        </li>
      </ur>
    </div>
  </div>
</template>

<script setup></script>

<style>
.flex-ur {
  display: flex;
  justify-content: space-between;
}

.clickablue {
  cursor: pointer;
}
</style>
