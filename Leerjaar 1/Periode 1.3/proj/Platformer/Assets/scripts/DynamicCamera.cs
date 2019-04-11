using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DynamicCamera : MonoBehaviour
{
    public GameObject player;
    [Range(0, 10f)] [SerializeField] public float speed = .05f;
    private Vector3 velocity = Vector3.zero;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        Vector3 newPos = transform.position;

        if (transform.position.x - 3 < player.transform.position.x) newPos.x += speed;
        if (transform.position.x + 3 > player.transform.position.x) newPos.x -= speed;

        if (transform.position.y < player.transform.position.y) newPos.y += speed;
        if (transform.position.y + -2 > player.transform.position.y) newPos.y -= speed;

        float extraSpeed = 1f;
        transform.position = Vector3.SmoothDamp(transform.position, newPos, ref velocity, 0.4f * extraSpeed);
    }
}