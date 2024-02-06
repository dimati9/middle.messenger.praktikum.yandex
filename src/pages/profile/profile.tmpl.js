export const template = `
 <div class="content page_profile">
        <a class="button_back" href="/messages">
            <div class="rotate_svg_180">
                {{{svg_send}}}
            </div>
        </a>
        
        <div class="profile_content">
            <div class="profile_logo">
                <img src="">
            </div>           
             <div class="profile_name">{{name}}</div>
            <div class="profile_params">
                
                {{#each params}}
                 <div class="profile_param">
                    <div class="profile_param_name">{{{this.name}}}</div>
                    <div class="profile_param_value">{{{this.value}}}</div>
                </div>     
                {{/each}}
            </div>
            <div class="profile_buttons">
                <a class="profile_buttons_button" href="#">Изменить данные</a>
                <a class="profile_buttons_button" href="#">Изменить пароль</a>
                <a class="profile_buttons_button profile_buttons_button__red" href="/">Выйти</a>
            </div>
        </div>
 </div>
`