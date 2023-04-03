<script>
import Modal from "./Modal.vue";

export default {
    components: {
        Modal
    }
}
</script>

<template>
    <Modal>
        <div class="login-modal-content">
            <form id="loginForm">
                <h2>Inicio de sesión</h2>
                <input type="text" name="username" placeholder="Nombre de usuario...">
                <input type="password" name="password" placeholder="Contreseña">
                <button class="button btn-primary" type="submit" >Submit</button>
            </form>
        </div>
    </Modal>
</template>

<style>
#loginForm :is(input, button){
    padding: 10px 20px;
    border: 1px solid #0003;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 16px;
}

#loginForm input {
    width: 100%;
}

#loginForm input:focus {
    outline: 1px solid var(--primary-color);
}

#loginForm {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>