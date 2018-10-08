<template>
    <div class="container" fade-in>
        <div class="row">
            <div class="col-12 col-md-4 text-center align-middle">
                <img style="width: 200px; margin-top: 70px" class="rounded-circle" src="/dist/img/photo.jpg">
            </div>
             <div class="col-12 col-md-8">
                 <h2 class="mt-4">About me</h2>
                <p>
                    Hi! My name is Vasiliy and I'm a full stack web developer for 
                    <a target="_blank" href="http://www.quantmarketing.com">Quant Marketing Ltd., London</a>.
                </p>
                <p>
                    I have over 5 years of commercial software development, 
                    and my main area of interest now is a development of web services with ASP.NET Core framework and 
                    Angular on a front-end.
                </p>
                <p>
                    Currently, I'm located at Moscow and I'm one of the leads of my hometown's local growing IT Community - 
                    <a target="_blank" href="https://www.meetup.com/ru-RU/GDG-Astrakhan/">Google Developer Groups Astrakhan</a>. 
                    We help our developers get together for experience exchange and networking, we organize meetups, conferences and hackathons.
                </p>
                <h4>Skills</h4>
                <p>
                    I'm experienced at web services development at either B2C or B2B markets 
                    using <span class="badge badge-success">ASP.NET MVC/WebAPI</span> with <span  class="badge badge-success">.Net Framework/Core</span>. 
                    
                    Also I have an experience with 
                    <span  class="badge badge-success">AngularJS (1.x)</span> and 
                    <span  class="badge badge-success">Angular 5+</span>. 
                    
                    Familiar with 
                    <span class="badge badge-success">TypeScript</span>
                    <span class="badge badge-success">Node.js</span>
                    <span class="badge badge-success">Vue.js</span>
                    <span class="badge badge-success">Java</span>,
                    
                    and tools such as 
                    <span class="badge badge-success">git</span>
                    <span class="badge badge-success">TFS</span>
                    <span class="badge badge-success">npm</span>
                    <span class="badge badge-success">webpack</span> etc.
                </p>
                <div class="row mb-2" v-for="skill in skills" :key="skill.name">
                    <div class="d-none d-sm-block col-sm-3 text-right">
                        {{skill.name}}
                    </div>
                    <div class="col-12 d-block d-sm-none">
                        {{skill.name}}
                    </div>
                    <div class="col-12 col-sm-9">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-success forced-zero" :style="{width: skill.percent + '%'}" role="progressbar">{{skill.percent}}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            skills: [{
                    name: 'c#',
                    percent: '80'
                }, {
                    name: 'asp.net web api',
                    percent: '75'
                }, {
                    name: 'asp.net core',
                    percent: '70'
                }, {
                    name: 'javascript',
                    percent: '80'
                }, {
                    name: 'angular.js',
                    percent: '80'
                }, {
                    name: 'angular 5+',
                    percent: '50'
                }
            ]
        }
    }
}
</script>
