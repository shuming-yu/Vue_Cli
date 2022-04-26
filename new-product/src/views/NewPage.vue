<template>
    <!-- Bootstrap Links and Buttons 參考 : https://getbootstrap.com/docs/5.1/components/list-group/#links-and-buttons -->
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <router-link to="a" class="list-group-item list-group-item-action">
                    元件 A
                </router-link>
            </div>
            <div class="list-group">
                <router-link to="b" class="list-group-item list-group-item-action">
                    元件 B
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
