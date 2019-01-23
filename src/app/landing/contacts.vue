<template>
    <div class="container text-center">
        <h2>Contacts</h2>
        <div class="my-5">
            <h5>
                You can find me here
            </h5>
            <p class="my-4" fade-in>
                <a :class="{'mr-4': index != socials.length-1}" v-for="(media, index) in socials" :key="`media-${index}`" :href="media.link" target="_blank">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-fw fa-stack-1x fa-inverse" :class="media.icon"></i>
                    </span>
                </a>
            </p>
            <!-- <h5 class="my-4">Or send me a message with the form below</h5> -->
        </div>
        <!-- <div class="row" fade-in>
            <form method="POST" url="https://formspree.io/knizhnikov.vasiliy@gmail.com" class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <div class="form-group">
                    <input v-model="email" name="email" type="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <textarea v-model="message" name="message" placeholder="Message" rows="8" class="form-control" required></textarea>
                </div>
                <p>
                    <button :disabled="sending" class="btn btn-block btn-success">
                        <span v-if="!sending">Send <i class="fa fa-envelope"></i></span>
                        <i v-if="sending" class="fa fa-spin fa-circle-o-notch"></i> 
                    </button>
                </p>
            </form>
        </div> -->
    </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
    data() {
        return {
            sending: false,
            email: null,
            message: null,
            socials: [{
                    icon: 'fa-github',
                    link: 'https://github.com/knizhnikov'
                }, {    
                    icon: 'fa-facebook',
                    link: 'https://facebook.com/knizhnikov'
                }, {    
                    icon: 'fa-linkedin',
                    link: 'https://linkedin.com/knizhnikov'
                }, {
                    icon: 'fa-telegram',
                    link: 'https://www.t.me/knizhnikov'
                }, {
                    icon: 'fa-instagram',
                    link: 'https://instagram.com/knizhnikov'
                }, {
                    icon: 'fa-vk',
                    link: 'https://vk.com/vknizhnikov'
                }
            ]
        };
    },
    methods: {
        postMessage() {
            this.sending = true;
            axios.post('https://formspree.io/knizhnikov.vasiliy@gmail.com', {
                email: this.email,
                message: this.message
            })
            .then(response => {
                swal('Done!', 'Your message have been sent. I will contact you as soon as possible, thanks!', 'success');
                this.email = null;
                this.message = null;
                this.sending = false;
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
}
</script>
