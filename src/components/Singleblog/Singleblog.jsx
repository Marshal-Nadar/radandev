import './Singleblog.css';
import Image from 'next/image';

const Singleblog = () => {
  return (
    <div>
      <header>
        <br />
        <h1 className='heading'>Exploring SquareX:</h1>
      </header>
      <main>
        <article className='article'>
          <section>
            <Image
              src='/sqrxmeme.png'
              alt='SquareX meme image'
              width={700}
              height={520}
              className='img'
            />
            <h3 className='header'>Square [X]</h3>
            <p className='para'>
              Square [X] - Ultimate Chrome extension for secure and private
              internet browsing. Join us as we explore the remarkable features
              of SquareX, including its unique tools like Disposable Browser,
              Disposable Email, and Disposable File Viewer.
            </p>
            <p className='para'>
              Let's embark on a journey to uncover how SquareX can revolutionize
              your online experience.
            </p>
          </section>
          <section>
            <h3 className='header'>Disposable Browser</h3>
            <p className='para'>
              Have you ever wanted to browse the web without leaving a trace?
              With SquareX's disposable browser feature, now you can!
            </p>
            <p className='para'>
              This innovative tool creates a temporary browser window that
              automatically deletes all browsing history, cookies, and other
              data once you close it.
            </p>
            <Image
              src='/disposable_browser.png'
              alt='disposable_browser image'
              width={1000}
              height={560}
              className='img'
            />

            <p className='para'>
              Which means, browsing with a fresh identity every time. With each
              click, you can open a browser from a different country or
              location, effectively changing your virtual location with every
              new tab.
            </p>
            <p className='para'>
              So whether you're doing some online shopping or browsing sensitive
              information, you can do so without worrying about leaving any
              digital footprints behind.
            </p>
          </section>
          <section>
            <h3 className='header'>Disposable Email</h3>
            <p className='para'>
              SquareX's disposable email feature is a great way to protect your
              personal email address from spam and phishing attacks. You can
              generate as many disposable emails as you want, and use them for
              any website or service that you don't trust.
            </p>
            <p className='para'>
              This is especially useful when you're signing up for a new website
              or service that you're not sure about, or when you're downloading
              something from a website that you don't know well.
            </p>
            <p className='para'>
              You can also customize the email address to make it look like it's
              from a specific domain.
            </p>
            <Image
              src='/disposable_email.png'
              alt='disposable_email image'
              width={1000}
              height={300}
              className='img'
            />

            <p className='para'>
              The disposable email address will work just like a regular email
              address, but it won't be linked to your personal email address.
              This means that if the website or service is hacked or if your
              email address is compromised, your personal email address will be
              safe.
            </p>
            <p className='para'>
              It can be useful for newsletters, temporary sign up, online
              services, and more. You can effortlessly delete them when no
              longer needed.
            </p>
            <p className='para'>
              By using a disposable email, you can shield your personal inbox
              from spam and unwanted communications.
            </p>
          </section>
          <section>
            <h3 className='header'>Disposable File Viewer</h3>
            <p className='para'>
              Ever received a suspicious email attachment and hesitated to open
              it? With SquareX's Disposable File Viewer, you can now view files
              safely and securely without risking your device's security.
            </p>
            <Image
              src='/disposable_file.png'
              alt='disposable_file image'
              width={1000}
              height={500}
              className='img'
            />

            <p className='para'>
              This feature acts as a vigilant guardian, automatically
              intercepting any files you download. Instead of directly
              downloading the file to your device, SquareX directs it to a
              secure, cloud-based environment called the Disposable File Viewer.
            </p>
            <p className='para'>
              Here, the file is scanned for potential threats before you ever
              interact with it. This offers peace of mind, allowing you to
              safely open documents, spreadsheets, PDFs, and more, even from
              untrusted sources.
            </p>
          </section>

          <section>
            <h3 className='header'>Escape from Email Tracker</h3>
            <p className='para'>
              Ever wondered if someone is tracking your emails and monitoring
              your online activity? With SquareX's Email Tracker Escape feature,
              you can put an end to email tracking once and for all.
            </p>
            <Image
              src='/disposable_tracker.png'
              alt='disposable_tracker image'
              width={1000}
              height={280}
              className='img'
            />
            <p className='para'>
              This feature automatically detects and blocks email trackers,
              preventing senders from knowing when you open their emails, click
              on links, or download attachments.
            </p>
          </section>
          <section>
            <h3 className='header'>Ready to Be Fearless Online?</h3>
            <p className='para'>
              Don't wait – download SquareX today and experience the internet
              like never before!
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Singleblog;
