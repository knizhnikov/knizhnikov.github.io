<template>
    <div class="container" fade-in>
        <h2 class="mt-4">Projects</h2>
        <b-modal id="projectDetails" size="lg" @ok="getNextProject" ok-title="Next project" cancel-title="Close" cancel-variant="light">
            <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#fff"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                <b-carousel-slide v-for="image in detailedProject.images" :key="image"
                                    :img-src="image"
                ></b-carousel-slide>
            </b-carousel>
            <!-- Description -->
            <h3 class="my-4">{{detailedProject.name}}</h3>
            <p class="my-4">
                <span v-for="tech in detailedProject.technologies" :key="tech" class="badge badge-secondary mr-1">{{tech}}</span>
            </p>
            <p class="my-4">{{detailedProject.description}}</p>
        </b-modal>
        <div class="project-list-wrapper">
            <div class="project-list" v-bind:class="{ expanded: projectsExpanded, collapsed: !projectsExpanded }">
                <div class="card-columns mt-2">
                    <div v-for="project in projects" :key="project.id" class="card">
                        <div class="card-img-top" v-bind:style="{'background-image': project.images? 'url(' + project.images[0] + ')' : ''}"></div>
                        <div class="card-body">
                            <h5 class="card-title">{{project.name}}</h5>
                            <p class="card-text">{{project.description}}</p>
                            <p>
                                <b-btn v-on:click="detailedProject = project" variant="outline-secondary" v-b-modal.projectDetails>Details</b-btn>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show-more">
                <button v-on:click="projectsExpanded = !projectsExpanded" class="btn btn-light">
                    Show <span v-if="!projectsExpanded">more <i class="fa fa-caret-down"></i></span>
                         <span v-if="projectsExpanded">less  <i class="fa fa-caret-up"></i></span>
                </button>
            </div>
        </div>
    </div>    
</template>

<script>
module.exports = {
    methods: {
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        },
        getNextProject(bvEvt){
            bvEvt.preventDefault();
            var index = this.projects.indexOf(this.detailedProject);
            this.detailedProject = this.projects[ index + 1 >= this.projects.length? 0 : ++index ];
        }
    },
    data: function(){
        var id = 1;
        return {
            sliding: true,
            slide: 0,
            detailedProject: {},
            projectsExpanded: false,
            projects: [
            {
                id: id++,
                name: "CoWorker Tool",
                description: "CRM tool for IKEA FAMILY coworkers, used for managing customers information, pruchase history, workshops, offers, coupons etc.",
                technologies: ['asp.net web api 2', 'angular.js', 'angular 5', 'bootstrap', 'ms-sql'],
                images: [
                    '/dist/img/projects/coworker/1.png', '/dist/img/projects/coworker/2.png', '/dist/img/projects/coworker/3.png'
                ]
            }, {
                id: id++,
                name: "IKEA FAMILY Online",
                description: "Web site for IKEA FAMILY members for managing personal info, getting coupons, viewing special offers for IKEA FAMILY members, getting card",
                technologies: ['asp.net web api 2', 'angular.js', 'bootstrap', 'ms-sql'],
                images: [
                    '/dist/img/projects/online/1.png', '/dist/img/projects/online/2.png', '/dist/img/projects/online/3.png', '/dist/img/projects/online/4.png', '/dist/img/projects/online/5.png', '/dist/img/projects/online/6.png'
                ]
            }, {
                id: id++,
                name: "IKEA FAMILY Kiosk",
                description: "IKEA FAMILY in-store kiosk application for managing member's profile, printing temporary cards, viewing special offers and coupons",
                technologies: ['asp.net web api 2', 'angular.js', 'bootstrap', 'ms-sql'],
                images: [
                    '/dist/img/projects/kiosk/1.png'
                ]
            },{
                id: id++,
                name: "Other projects for IKEA FAMILY",
                description: 
                    `Apple Wallet integration for IKEA FAMILY store cards and coupons, 
                     Style Puzzle - mini-app for determing customer's preferred furniture style,
                     SMS getways for marketing communications`,
                technologies: ['asp.net web api 2', 'angular.js', 'ms-sql', 'sql clr' ],
                images: [
                    '/dist/img/projects/ikea-family-others/1.png', '/dist/img/projects/ikea-family-others/2.png', '/dist/img/projects/ikea-family-others/3.png', '/dist/img/projects/ikea-family-others/4.png'
                ]
            },{
                id: id++,
                name: "Adeptik FSM",
                description: "Web-service and mobile app for field service management. Allows to organize work of small service companies which have field workers. Role in project: architecture design, analysis and compilation of requirements, development of web-service.",
                technologies: ['asp.net web api 2', 'angular.js', 'postgres sql', 'mongo db'],
                images: [
                    '/dist/img/projects/Snrd/1.png', '/dist/img/projects/Snrd/2.png', '/dist/img/projects/Snrd/3.png'
                ]
            },{
                id: id++,
                name: "Agent Plus",
                description: "License control and accounting system for Agent Plus - software platform for field workers automation.",
                technologies: ['asp.net mvc 5', 'asp.net web api 2', 'knockout.js', 'ms-sql'],
                images: [
                    '/dist/img/projects/AgentPlus/1.png', '/dist/img/projects/AgentPlus/2.png', '/dist/img/projects/AgentPlus/3.png', '/dist/img/projects/AgentPlus/4.png'
                ]
            },{
                id: id++,
                name: "Adwify",
                description: "Cloud advertising platform for Wi-Fi users. Allows to show advertising content in client’s web-browsers and get statistics about shows (number of shows, number of clicks, click-through rate, the number of users who seen the ads, etc).",
                technologies: ['asp.net mvc 5', 'asp.net web api 2',  'angular.js', 'entiry framework 6', 'ms-sql', 'mongo db'],
                images: [
                    '/dist/img/projects/Adwify/0.png', '/dist/img/projects/Adwify/1.png', '/dist/img/projects/Adwify/2.png'
                ]
            },{
                id: id++,
                name: "Adwify Horeca, Hoopla Media",
                description: "Cloud services for customers loyalty increasing. Allows to show interactive ads and promotions on devices, connected to Wi-Fi and analyze its efficiency.",
                technologies: ['asp.net mvc 5', 'asp.net web api 2',  'angular.js', 'entiry framework 6', 'ms-sql', 'mongo db'],
                images: [
                    '/dist/img/projects/Hoopla/client/0.jpg', '/dist/img/projects/Hoopla/client/1.jpg', '/dist/img/projects/Hoopla/client/2.jpg', '/dist/img/projects/Hoopla/client/3.jpg',
                    '/dist/img/projects/Hoopla/office/0.png', '/dist/img/projects/Hoopla/office/1.png', '/dist/img/projects/Hoopla/office/2.png', '/dist/img/projects/Hoopla/office/3.png'
                ]
            },{
                id: id++,
                name: "Startup Search",
                description: "Cloud service for startups expert review and optimizing work with project teams of business incubators. Now widely used by Higher School of Economy, Moscow",
                technologies: ['asp.net mvc 5', 'asp.net web api 2', 'angular.js', 'entiry framework 6', 'ms-sql', 'mongo db'],
                images: [
                    '/dist/img/projects/Startupsearch/1.png'
                ]
            }]
        };
    }
};
</script>

<style lang="scss">
    .project-list.expanded {
        height: inherit;
        overflow-y: none;

        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        -o-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    .project-list {
        height: 400px;
        overflow-y:hidden;

        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        transition: all .3s ease-out;

        div.card-img-top {
            height: 200px;
            background-size: cover;
        }
    }

    .show-more {
        margin-top: -70px;
        padding: 4em 0 2em 0;
        text-align: center;
        background: linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.9), #ffffff);
        display: block;
        position: absolute;
        z-index: 10;
        width: 100%;
        left:0px;
    }

    .carousel-item {
        height: 400px;

        img {
            max-height: 100% !important;
            width: auto !important;
            margin: auto !important;
        }
    }
</style>
