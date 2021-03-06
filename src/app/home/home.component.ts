import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('about') aboutElementRef!: ElementRef<HTMLElement>;
    @ViewChild('webProjects') webProjectsElementRef!: ElementRef<HTMLElement>;
    @ViewChild('otherProjects') otherProjectsElementRef!: ElementRef<HTMLElement>;

    headerHeight: number = 100;
    githubLink: string = 'https://github.com/sesan07';
    resumeLink: string = 'https://drive.google.com/file/d/1stGmZ8Y4VM-zbg-MFIGm2MrDHn6oLO7_/view?usp=sharing'
    description: string = `
        Hi. I'm Sam. I write code.

        I started out by making video games using Unity3D and C#.
        After making some games, I decided to try my hand at making native android apps with Android Studio and Kotlin.
        For my graduation project I worked on a library report management tool (based on COUNTER5) using Python and PyQT for the GUI.

        Since graduating, I now work in web development of Angular 2 based apps.
        I work with technologies like NodeJS, Hapi, RAML, Molecular and Oracle for back end development.
        I also work with the Elasticsearch, Logastash and Kibaba stack for search.
        My job involves building dockerized micro-services and apps using Docker Compose.

        I enjoy learning new things by working on personal projects whenever I get the chance!
    `

    constructor(private _route: ActivatedRoute, public projectService: ProjectService) {
    }

    ngOnInit(): void {
        this._route.fragment.subscribe(fragment => {
            switch (fragment) {
                case 'about':
                    this._smoothScrollTo(this.aboutElementRef);
                    break;
                case 'web-projects':
                    this._smoothScrollTo(this.webProjectsElementRef);
                    break;
                case 'other-projects':
                    this._smoothScrollTo(this.otherProjectsElementRef);
                    break;
            }
        });
    }

    private _smoothScrollTo(elementRef: ElementRef): void {
        if (!elementRef) {
            return;
        }

        const elementOffsetTop: number = elementRef.nativeElement.offsetTop;
        window.scrollTo({
            top: elementOffsetTop - this.headerHeight,
            behavior: 'smooth'
        });
    }

}
