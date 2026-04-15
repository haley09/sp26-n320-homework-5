// ============================================================
//  animations.js — WaveForm Landing Page
//  Assignment 5: GSAP Animation
//
//  Name:   _________Haley Abel__________________
//  Date:   __________04/15/2026_________________
// ============================================================
//
//  GSAP is already loaded via CDN in index.html.
//  Test any animation instantly in the browser console —
//  e.g. gsap.to('#heroTitle', {opacity: 0, duration: 1})
//
//  RECOMMENDED ORDER: Tasks run top to bottom as written.
//  Complete one task, reload the browser, verify it works,
//  then move to the next.
// ============================================================


// ============================================================
//  TASK 1 — Hero Section Timeline  (5 points)
//
//  TODO:
//  1. Animate the nav bar first (it starts at opacity: 0):
//     gsap.from('#mainNav', { opacity: 0, y: -20, duration: 0.5 })
//
//  2. Create a timeline:
//     const heroTl = gsap.timeline()
//
//  3. Chain .from() calls on heroTl in this order:
//     a. '#heroEyebrow'  → { opacity:0, y:-20, duration:0.5 }
//     b. '#heroLine1'    → { opacity:0, x:-40, duration:0.6 }
//     c. '#heroLine2'    → { opacity:0, x:40,  duration:0.6 }, position: "-=0.3"
//     d. '#heroSub'      → { opacity:0, y:20,  duration:0.5 }
//     e. '#heroActions'  → { opacity:0, y:20,  duration:0.4 }
//     f. '#heroBadges'   → { opacity:0,        duration:0.4 }
//
//  4. After the timeline, animate float cards with stagger:
//     gsap.from('.float-card', {
//         opacity: 0,
//         y: 60,
//         rotation: -5,
//         duration: 0.7,
//         ease: 'back.out(1.5)',
//         stagger: 0.15
//     })
// ============================================================

// YOUR CODE HERE
function animateHeroSection() {
    // Animate the nav bar
    gsap.from('#mainNav', { opacity: 0, y: -20, duration: 0.5 })

    // Create a timeline for the hero section
    const heroTl = gsap.timeline()

    // Chain animations for hero elements
    heroTl.from('#heroEyebrow', { opacity: 0, y: -20, duration: 0.5 })
          .from('#heroLine1', { opacity: 0, x: -40, duration: 0.6 })
          .from('#heroLine2', { opacity: 0, x: 40, duration: 0.6 }, "-=0.3")
          .from('#heroSub', { opacity: 0, y: 20, duration: 0.5 })
          .from('#heroActions', { opacity: 0, y: 20, duration: 0.4 })
          .from('#heroBadges', { opacity: 0, duration: 0.4 })

    // Animate float cards with stagger
    gsap.from('.float-card', {
        opacity: 0,
        y: 60,
        rotation: -5,
        duration: 0.7,
        ease: 'back.out(1.5)',
        stagger: 0.15
    })
}

// Call the function to run the animation
animateHeroSection()

// ============================================================
//  TASK 2 — Stats Counter Animation  (4 points)
//
//  TODO:
//  1. Fade the stats ticker in:
//     gsap.from('#statsTicker', { opacity: 0, y: 30, duration: 0.6 })
//
//  2. Create a counter object:
//     const counters = { users: 0, tracks: 0, artists: 0 }
//
//  3. Animate the counter object:
//     gsap.to(counters, {
//         users:    12400,
//         tracks:   85000,
//         artists:  3200,
//         duration: 2,
//         ease:     'power2.out',
//         onUpdate: function() {
//             // Inside here, update the DOM with current values:
//             document.getElementById('numUsers').textContent
//                 = Math.floor(counters.users).toLocaleString()
//             document.getElementById('numTracks').textContent
//                 = Math.floor(counters.tracks).toLocaleString()
//             document.getElementById('numArtists').textContent
//                 = Math.floor(counters.artists).toLocaleString()
//         }
//     })
//
//  4. Show the funding stat after 0.5s:
//     gsap.delayedCall(0.5, function() {
//         document.getElementById('numFunding').textContent = '$500K'
//     })
// ============================================================

// YOUR CODE HERE
function animateStatsCounter() {
    // Fade the stats ticker in
    gsap.from('#statsTicker', { opacity: 0, y: 30, duration: 0.6 })

    // Create a counter object
    const counters = { users: 0, tracks: 0, artists: 0 }

    // Animate the counter object
    gsap.to(counters, {
        users: 12400,
        tracks: 85000,
        artists: 3200,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function() {
            // Update the DOM with current values
            document.getElementById('numUsers').textContent = Math.floor(counters.users).toLocaleString()
            document.getElementById('numTracks').textContent = Math.floor(counters.tracks).toLocaleString()
            document.getElementById('numArtists').textContent = Math.floor(counters.artists).toLocaleString()
        }
    })

    // Show the funding stat after 0.5s
    gsap.delayedCall(0.5, function() {
        document.getElementById('numFunding').textContent = '$500K'
    })
}
// Call the function to run the animation
animateStatsCounter()

// ============================================================
//  TASK 3 — Features Grid Stagger  (4 points)
//
//  TODO:
//  1. Create a timeline for the section header:
//     const featTl = gsap.timeline()
//     featTl.from('#featuresTitle', { opacity:0, y:30, duration:0.5 })
//           .from('#featuresSub',   { opacity:0, y:20, duration:0.4 }, "-=0.2")
//
//  2. Animate all feature cards with stagger:
//     gsap.from('.feature-card', {
//         opacity: 0,
//         y:       50,
//         scale:   0.95,
//         duration: 0.5,
//         ease:    'power2.out',
//         stagger: { each: 0.1, from: 'start' }
//     })
//
//  3. Add hover animations to each card:
//     document.querySelectorAll('.feature-card').forEach(function(card) {
//         card.addEventListener('mouseenter', function() {
//             gsap.to(card, { y: -6, scale: 1.02, duration: 0.2 })
//         })
//         card.addEventListener('mouseleave', function() {
//             gsap.to(card, { y: 0, scale: 1, duration: 0.2 })
//         })
//     })
// ============================================================

// YOUR CODE HERE
function animateFeaturesGrid() {
    // Create a timeline for the section header
    const featTl = gsap.timeline()
    featTl.from('#featuresTitle', { opacity: 0, y: 30, duration: 0.5 })
          .from('#featuresSub', { opacity: 0, y: 20, duration: 0.4 }, "-=0.2")

    // Animate all feature cards with stagger
    gsap.from('.feature-card', {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.out',
        stagger: { each: 0.1, from: 'start' }
    })

    // Add hover animations to each card
    document.querySelectorAll('.feature-card').forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            gsap.to(card, { y: -6, scale: 1.02, duration: 0.2 })
        })
        card.addEventListener('mouseleave', function() {
            gsap.to(card, { y: 0, scale: 1, duration: 0.2 })
        })
    })
}
// Call the function to run the animation
animateFeaturesGrid()

// ============================================================
//  TASK 4 — Playlist Slide-In  (4 points)
//
//  TODO:
//  1. Animate the section header:
//     const plTl = gsap.timeline()
//     plTl.from('#playlistTitle', { opacity:0, x:-30, duration:0.5 })
//         .from('#playlistSub',   { opacity:0, x:-20, duration:0.4 }, "-=0.2")
//
//  2. Animate all playlist tracks with stagger:
//     gsap.from('.pl-track', {
//         opacity:  0,
//         x:        -60,
//         duration: 0.4,
//         ease:     'power2.out',
//         stagger:  0.12,
//         delay:    0.4
//     })
//
//  3. Add click interactions:
//     const allTracks = document.querySelectorAll('.pl-track')
//     allTracks.forEach(function(track) {
//         track.addEventListener('click', function() {
//             // First clear all tracks
//             gsap.to(allTracks, { backgroundColor: 'transparent', duration: 0.2 })
//             // Then highlight the clicked one
//             gsap.to(track, { backgroundColor: 'rgba(29,185,84,0.15)', duration: 0.2 })
//         })
//     })
// ============================================================

// YOUR CODE HERE
function animatePlaylistSlideIn() {
    // Animate the section header
    const plTl = gsap.timeline()
    plTl.from('#playlistTitle', { opacity: 0, x: -30, duration: 0.5 })
        .from('#playlistSub', { opacity: 0, x: -20, duration: 0.4 }, "-=0.2")

    // Animate all playlist tracks with stagger
    gsap.from('.pl-track', {
        opacity: 0,
        x: -60,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.12,
        delay: 0.4
    })

    // Add click interactions
    const allTracks = document.querySelectorAll('.pl-track')
    allTracks.forEach(function(track) {
        track.addEventListener('click', function() {
            // First clear all tracks
            gsap.to(allTracks, { backgroundColor: 'transparent', duration: 0.2 })
            // Then highlight the clicked one
            gsap.to(track, { backgroundColor: 'rgba(29,185,84,0.15)', duration: 0.2 })
        })
    })
}
// Call the function to run the animation
animatePlaylistSlideIn()



// ============================================================
//  TASK 5 — Pricing Cards Bounce In + Button Pulse  (3 points)
//
//  TODO:
//  1. Animate the section header with stagger:
//     gsap.from(['#pricingTitle', '#pricingSub'], {
//         opacity:  0,
//         y:        30,
//         duration: 0.5,
//         stagger:  0.15
//     })
//
//  2. Animate the pricing cards with bounce ease:
//     gsap.from('.price-card', {
//         opacity:  0,
//         y:        60,
//         scale:    0.9,
//         duration: 0.6,
//         ease:     'back.out(1.7)',
//         stagger:  0.15
//     })
//
//  3. Add a repeating pulse on the featured CTA button:
//     gsap.to('.price-btn-primary', {
//         scale:    1.05,
//         duration: 0.8,
//         repeat:   -1,
//         yoyo:     true,
//         ease:     'sine.inOut'
//     })
//
//  4. Fade in the footer:
//     gsap.from('#siteFooter', { opacity: 0, y: 20, duration: 0.6 })
// ============================================================

// YOUR CODE HERE
function animatePricingCards() {
    // Animate the section header with stagger
    gsap.from(['#pricingTitle', '#pricingSub'], {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.15
    })

    // Animate the pricing cards with bounce ease
    gsap.from('.price-card', {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.15
    })

    // Add a repeating pulse on the featured CTA button
    gsap.to('.price-btn-primary', {
        scale: 1.05,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    })

    // Fade in the footer
    gsap.from('#siteFooter', { opacity: 0, y: 20, duration: 0.6 })
}
// Call the function to run the animation
animatePricingCards()