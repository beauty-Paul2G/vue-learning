<script>
export default {
    mounted() {
        document.body.style.overflow = "hidden";
    },
    unmounted() {
        document.body.style.overflow = "overlay";
    }
}
</script>

<template>
    <div class="modal-container">
        <div class="modal">
            <button class="btn-close" @click="$parent.$parent.toggleModal">
                <i class="bi bi-x-lg" style="font-size: 18px;">
                </i></button>
            <slot></slot>
        </div>
    </div>
    <Transition name="entrance">
        <Toast v-if="toastDisplayed">{{ "Item added to cart" }}</Toast>
    </Transition>
</template>

<style>
.modal-container {
    width: 100vw;
    height: 100vh;
    background-color: #0003;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    padding: 50px 30px;
    width: 400px;
    max-width: 100%;
    border: 1px solid #0002;
    border-radius: 5px;
}

.modal img {
    width: 100%;
    border-radius: 5px;
}

.modal .btn-close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
}
</style>