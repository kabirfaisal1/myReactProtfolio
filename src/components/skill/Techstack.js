import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import
{
  SiTypescript,
  SiMysql,
  SiJavascript,
  SiMongodb,
  SiGraphql,
  SiReact,
} from "react-icons/si";
import { FaJava } from 'react-icons/fa';
function Techstack ()
{
  const ICON_SIZE = 48; // consistent size

  const tools = [
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiGraphql />, name: "GraphQL" },
  ];

  return (
    <Container
      fluid
      className="home-skills-section"
      data-test-id="professional-skill-set"
      id="skills"
    >
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

                {/* Focusable icon wrapper */}
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
          height: 88px;
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

        /* Tooltip */
        .tool-overlay {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: rgba(20, 20, 20, 0.95);
          color: #fff;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 0.85rem;
          line-height: 1.2;
          white-space: nowrap;
          max-width: min(90vw, 220px);
          overflow: hidden;
          text-overflow: ellipsis;
          opacity: 0;
          pointer-events: none;
          z-index: 2;
          transition: opacity 150ms ease, transform 150ms ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
        }

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

        .toolstack-icon-wrapper:hover .tool-overlay,
        .toolstack-icon-wrapper:focus-within .tool-overlay {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 375px) {
          .tool-overlay { font-size: 0.8rem; }
        }
      `}</style>
    </Container>
  );
}

export default Techstack;
