const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};u();const s=document.querySelector(".primary-header"),r=document.querySelector(".mobile-nav-toggle"),o=document.querySelector(".primary-navigation");r==null||r.addEventListener("click",()=>{o!=null&&o.hasAttribute("data-visible")?r.setAttribute("aria-expanded","false"):r.setAttribute("aria-expanded","true"),o==null||o.toggleAttribute("data-visible"),s==null||s.toggleAttribute("data-overlay")});