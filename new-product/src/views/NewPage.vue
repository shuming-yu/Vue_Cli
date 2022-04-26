<template>
    <!-- Bootstrap Links and Buttons 參考 : https://getbootstrap.com/docs/5.1/components/list-group/#links-and-buttons -->
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <router-link to="/newpage/a" class="list-group-item list-group-item-action">
                    元件 A
                </router-link>
            </div>
            <div class="list-group">
                <router-link to="/newpage/b" class="list-group-item list-group-item-action">
                    元件 B
                </router-link>
            </div>
            <div class="list-group">
                <router-link to="/newpage/namedView/b2c" class="list-group-item list-group-item-action">
                    元件 B2C
                </router-link>
            </div>
            <div class="list-group">
                <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-action">
                    元件 C2A
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
