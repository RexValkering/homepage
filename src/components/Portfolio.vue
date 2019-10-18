<template>
<div>
    <div class="row">
        <div class="col col-12">
            <h3>Highlighted projects and experience</h3>
        </div>
    </div>
    <template v-for="project in projects">
        <div class="row mt-3" v-if="project.tags.includes(category)">
            <div class="col col-12 mb-1">
                <h4 class="secondary-heading">{{ project.name }}</h4>
                <p class="description">
                    {{ project.description }}<br />
                    <span v-for="link in project.links"><a :href="link.url">{{ link.text }}</a><br /></span>
                    <span class="text-muted">Techniques: {{ project.techniques.join(', ') }}</span>
                </p>
            </div>
        </div>
    </template>
</div>
</template>

<script>
import { projects } from '../content.js';

export default {
    data: function() {
        return {
            projects,
            category: 'highlight'
        }
    }
}
</script>
