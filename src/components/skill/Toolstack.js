import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import
{
  SiPostman,
  SiHeroku,
  SiHomebrew,
  SiGithubactions,
  SiInsomnia,
  SiJira,
  SiK6,
  SiSelenium,
  SiCypress,
} from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { VscVscode, VscAzureDevops } from "react-icons/vsc";
import { FaAmazon } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

function Toolstack ()
{
  const ICON_SIZE = 48; // tweak if you want larger/smaller icons

  const tools = [
    { icon: <SiCypress />, name: "Cypress" },
    { icon: <SiK6 />, name: "K6" },
    { icon: <SiSelenium />, name: "Selenium" },
    { icon: <TbBrandPowershell />, name: "PowerShell" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiHomebrew />, name: "Homebrew" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiHeroku />, name: "Heroku" },
    { icon: <SiInsomnia />, name: "Insomnia" },
    { icon: <FaAmazon />, name: "Amazon AWS" },
    { icon: <VscAzureDevops />, name: "Azure DevOps" },
    { icon: <SiJira />, name: "Jira" },
  ];

  return (
    <Container fluid className="home-skills-section" data-test-id="tools-used" id="skills">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: 50 }}>
          {tools.map( ( tool ) => (
            <Col
              xs={4}
              md={2}
              key={tool.name}
              className="tech-icons"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="toolstack-icon-wrapper">
                {/* Tooltip */}
                <span className="tool-overlay" role="tooltip">
                  {tool.name}
                </span>

                {/* Focusable icon wrapper for hover + keyboard */}
                <button
                  type="button"
                  className="tool-icon-button"
                  aria-label={tool.name}
                  title={tool.name}
                >
                  {React.cloneElement( tool.icon, { size: ICON_SIZE, "aria-hidden": true } )}
                </button>
              </div>
            </Col>
          ) )}
        </Row>
      </Container>

      <style>{`
        .toolstack-icon-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 88px; /* keeps grid tidy; adjust as needed */
          width: 100%;
        }

        .tool-icon-button {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          line-height: 0;
          outline: none;
        }

        .tool-icon-button:focus-visible {
          outline: 2px solid #7cc5ff;
          outline-offset: 4px;
          border-radius: 8px;
        }

        /* Tooltip bubble */
        .tool-overlay {
          position: absolute;
          bottom: calc(100% + 8px); /* place above icon */
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: rgba(20, 20, 20, 0.95);
          color: #fff;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 0.85rem;
          line-height: 1.2;
          white-space: nowrap;
          max-width: min(90vw, 220px); /* keep it on-screen */
          overflow: hidden;
          text-overflow: ellipsis;
          opacity: 0;
          pointer-events: none;
          z-index: 2;
          transition: opacity 150ms ease, transform 150ms ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
        }

        /* Tiny caret under the tooltip */
        .tool-overlay::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: rgba(20,20,20,0.95) transparent transparent transparent;
        }

        /* Show tooltip on hover or keyboard focus */
        .toolstack-icon-wrapper:hover .tool-overlay,
        .toolstack-icon-wrapper:focus-within .tool-overlay {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Optional: shrink fonts slightly on very small screens */
        @media (max-width: 375px) {
          .tool-overlay { font-size: 0.8rem; }
        }
      `}</style>
    </Container>
  );
}

export default Toolstack;
