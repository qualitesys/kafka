console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java 39 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "SaslServer"
 , "c2" : "org.apache.kafka.common.security.plain.internals.PlainSaslServer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.plain.internals.PlainSaslServer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#57"
 , "c1" : "PlainSaslServer"
 , "c2" : "PlainSaslServer(CallbackHandler)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#72"
 , "c1" : "byte[]"
 , "c2" : "evaluateResponse(byte[])"
 , "c3" : "5"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#117"
 , "c1" : "List&lt;String&gt;"
 , "c2" : "extractTokens(String)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00138"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#138"
 , "c1" : "String"
 , "c2" : "getAuthorizationID()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00145"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#145"
 , "c1" : "String"
 , "c2" : "getMechanismName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#150"
 , "c1" : "Object"
 , "c2" : "getNegotiatedProperty(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#157"
 , "c1" : "boolean"
 , "c2" : "isComplete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00162"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#162"
 , "c1" : "byte[]"
 , "c2" : "unwrap(byte[];int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00169"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#169"
 , "c1" : "byte[]"
 , "c2" : "wrap(byte[];int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00176"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#176"
 , "c1" : "void"
 , "c2" : "dispose()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method evaluateResponse arguments byte[]  responseBytes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00072] For method evaluateResponse list of called methods Object monObjet|java.util.List&lt;java.lang.String&gt; extractTokensN182760"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  'Authentication failed: username not specified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  'Authentication failed: password not specified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  'username' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  'Authentication failed: credentials for user could not be verified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  'Authentication failed: Invalid username or password' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  'Authentication failed: Client requested an authorization id that is different from username' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.evaluateResponse@POLYN182135 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method extractTokens arguments String  string"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00117] For method extractTokens list of called methods Object monObjet|int string_indexOfN184936"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument string is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  '\u0000' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.extractTokens@POLYN184504 the MagicNumber/String  'Invalid SASL/PLAIN response: expected 3 tokens, got ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.getAuthorizationID@POLYN185694 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method getNegotiatedProperty arguments String  propName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.getNegotiatedProperty@POLYN186010 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.getNegotiatedProperty@POLYN186010 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method unwrap arguments byte[]  incoming|int  offset|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.unwrap@POLYN186356 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method wrap arguments byte[]  outgoing|int  offset|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.wrap@POLYN186761 the MagicNumber/String  'Authentication exchange has not completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method createSaslServer arguments String  mechanism|String  protocol|String  serverName|Map&lt;String ,? &gt;  props|CallbackHandler  cbh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.PlainSaslServerFactory.createSaslServer@POLYN187266 the MagicNumber/String  'Mechanism \'%s\' is not supported. Only PLAIN is supported.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method getMechanismNames arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.PlainSaslServerFactory.getMechanismNames@POLYN187791 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.common.security.plain.internals.PlainSaslServer.PlainSaslServerFactory.getMechanismNames@POLYN187791 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00176] Void method dispose is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00176] Void method dispose is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/plain/internals/PlainSaslServer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
