using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float speed = 25;
    private Rigidbody2D rb;

    public float jumpHeight = 400;
    private bool onGround;
    void Start()
    {
        onGround = true;
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && onGround == true)
        {
            rb.AddForce(Vector2.up * jumpHeight);
            onGround = false;
            Debug.Log(onGround);
        }
        if (Input.GetKey(KeyCode.A))
        {
            transform.position -= transform.right * speed * Time.deltaTime;
        }
        if (Input.GetKey(KeyCode.D))
        {
            transform.position += transform.right * speed * Time.deltaTime;
        }
    }

    
    private void OnCollisionEnter2D(Collision2D coll)
    {
        if (coll.gameObject.CompareTag("Ground"))
        {
            onGround = true;        }
    }
}
