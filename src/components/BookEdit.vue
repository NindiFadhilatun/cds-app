<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-3">Book Edit</h1>
            </div>
        </div>
    </div>
</template>

<script>
import security from "@/components/security";

export default {
  beforeMount() {
    security.requireToken();
  }
}
</script>