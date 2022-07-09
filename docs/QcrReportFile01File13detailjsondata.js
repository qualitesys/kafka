console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java 51 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.InFlightRequests"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.InFlightRequests" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "InFlightRequests"
 , "c2" : "InFlightRequests(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "add(NetworkClient.InFlightRequest)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Deque<NetworkClient.InFlightRequest>"
 , "c2" : "requestQueue(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "NetworkClient.InFlightRequest"
 , "c2" : "completeNext(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "NetworkClient.InFlightRequest"
 , "c2" : "lastSent(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NetworkClient.InFlightRequest"
 , "c2" : "completeLastSent(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "canSendMore(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "count(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "count()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Iterable<NetworkClient.InFlightRequest>"
 , "c2" : "clearAll(String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Boolean"
 , "c2" : "hasExpiredRequest(long;Deque<NetworkClient.InFlightRequest>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "nodesWithTimedOutRequests(long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class InFlightRequests contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method add arguments NetworkClient.InFlightRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.clients.InFlightRequests.add@POLYN168393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method requestQueue arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00038] For method requestQueue list of called methods Object monObjet|java.util.Deque&lt;NetworkClient.InFlightRequest&gt; requests_getN169252"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.clients.InFlightRequests.requestQueue@POLYN169126 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.clients.InFlightRequests.requestQueue@POLYN169126 the MagicNumber/String  'There are no in-flight requests for node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method completeNext arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00046] For method completeNext list of called methods Object monObjet|java.util.Deque&lt;NetworkClient.InFlightRequest&gt; requestQueueN169736"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method lastSent arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method completeLastSent arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00058] For method completeLastSent list of called methods Object monObjet|java.util.Deque&lt;NetworkClient.InFlightRequest&gt; requestQueueN170399"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method canSendMore arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00065] For method canSendMore list of called methods Object monObjet|boolean requests_getN170822"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.clients.InFlightRequests.canSendMore@POLYN170696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method count arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00072] For method count list of called methods Object monObjet|int requests_getN171393"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.clients.InFlightRequests.count@POLYN171267 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.clients.InFlightRequests.count@POLYN171267 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method isEmpty arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00078] For method isEmpty list of called methods Object monObjet|boolean requests_getN171788"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.InFlightRequests.isEmpty@POLYN171662 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.InFlightRequests.isEmpty@POLYN172213 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.InFlightRequests.isEmpty@POLYN172213 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method clearAll arguments String  node"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00098] For method clearAll list of called methods Object monObjet|Iterable&lt;NetworkClient.InFlightRequest&gt; requests_getN172833|Iterable&lt;NetworkClient.InFlightRequest&gt; requests_removeN173106"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.InFlightRequests.clearAll@POLYN172707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method hasExpiredRequest arguments long  now|Deque&lt;NetworkClient.InFlightRequest &gt;  deque"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.InFlightRequests.hasExpiredRequest@POLYN173363 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.InFlightRequests.hasExpiredRequest@POLYN173363 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method nodesWithTimedOutRequests arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00046] Public method completeNext is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00053] Public method lastSent is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00058] Public method completeLastSent is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00072] Public method count is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00078] Public method isEmpty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00084] Public method count is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00089] Public method isEmpty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00098] Public method clearAll is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00118] Public method nodesWithTimedOutRequests is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00026] Public method add is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.InFlightRequests.requestQueue@POLYN169126"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.InFlightRequests.canSendMore@POLYN170696"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.InFlightRequests.clearAll@POLYN172707"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.clients.InFlightRequests.requestQueue@POLYN169126 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.clients.InFlightRequests.requestQueue@POLYN169126 the MagicNumber/String 'There are no in-flight requests for node ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.clients.InFlightRequests.canSendMore@POLYN170696 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/InFlightRequests.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.clients.InFlightRequests.clearAll@POLYN172707 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
