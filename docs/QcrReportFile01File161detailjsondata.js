console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java 52 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiLookupStrategy<CoordinatorKey>"
 , "c2" : "org.apache.kafka.clients.admin.internals.CoordinatorStrategy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.CoordinatorStrategy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#49"
 , "c1" : "CoordinatorStrategy"
 , "c2" : "CoordinatorStrategy(FindCoordinatorRequest.CoordinatorType;LogContext)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#58"
 , "c1" : "ApiRequestScope"
 , "c2" : "lookupScope(CoordinatorKey)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#69"
 , "c1" : "FindCoordinatorRequest.Builder"
 , "c2" : "buildRequest(Set&lt;CoordinatorKey&gt;)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#89"
 , "c1" : "LookupResult&lt;CoordinatorKey&gt;"
 , "c2" : "handleResponse(Set&lt;CoordinatorKey&gt;;AbstractResponse)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#119"
 , "c1" : "void"
 , "c2" : "disableBatch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#123"
 , "c1" : "CoordinatorKey"
 , "c2" : "requireSingletonAndType(Set&lt;CoordinatorKey&gt;)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#134"
 , "c1" : "void"
 , "c2" : "ensureSameType(Set&lt;CoordinatorKey&gt;)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#143"
 , "c1" : "boolean"
 , "c2" : "isRepresentableKey(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00147"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#147"
 , "c1" : "void"
 , "c2" : "handleError(Errors;CoordinatorKey;int;Map&lt;CoordinatorKey,Integer&gt;;Map&lt;CoordinatorKey,Throwable&gt;)"
 , "c3" : "6"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "28"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
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
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method lookupScope arguments CoordinatorKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method buildRequest arguments Set&lt;CoordinatorKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00069] For method buildRequest list of called methods Object monObjet|org.apache.kafka.clients.admin.internals.CoordinatorKey requireSingletonAndTypeN172239"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.buildRequest@POLYN170990 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.buildRequest@POLYN170990 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method handleResponse arguments Set&lt;CoordinatorKey &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00089] For method handleResponse list of called methods Object monObjet|org.apache.kafka.clients.admin.internals.CoordinatorKey requireSingletonAndTypeN173443"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleResponse@POLYN172553 the MagicNumber/String  'The given group id '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleResponse@POLYN172553 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleResponse@POLYN172553 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.disableBatch@POLYN174122 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method requireSingletonAndType arguments Set&lt;CoordinatorKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.requireSingletonAndType@POLYN174227 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.requireSingletonAndType@POLYN174227 the MagicNumber/String  'Unexpected size of key set: expected 1, but got ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.requireSingletonAndType@POLYN174227 the MagicNumber/String  'Unexpected key type: expected key to be of type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.requireSingletonAndType@POLYN174227 the MagicNumber/String  ', but got ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method ensureSameType arguments Set&lt;CoordinatorKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.ensureSameType@POLYN174885 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.ensureSameType@POLYN174885 the MagicNumber/String  'Unexpected size of key set: expected &amp;gt;= 1, but got ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.ensureSameType@POLYN174885 the MagicNumber/String  'Unexpected key set: expected all key to be of type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.ensureSameType@POLYN174885 the MagicNumber/String  ', but some key were not' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method isRepresentableKey arguments String  groupId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.isRepresentableKey@POLYN175600 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method handleError arguments Errors  error|CoordinatorKey  key|int  nodeId|Map&lt;CoordinatorKey ,Integer &gt;  mappedKeys|Map&lt;CoordinatorKey ,Throwable &gt;  failedKeys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument mappedKeys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument failedKeys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00165] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  'FindCoordinator request for key {} returned topic-level error {}. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  'FindCoordinator request for groupId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  '  failed due to authorization failure' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  'FindCoordinator request for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  'transactionalId  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  '  failed due to authorization failure' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  'FindCoordinator request for key ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.handleError@POLYN175724 the MagicNumber/String  '  failed due to an unexpected error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00181] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.LookupRequestScope.equals@POLYN177339 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.LookupRequestScope.equals@POLYN177339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.LookupRequestScope.equals@POLYN177339 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.CoordinatorStrategy.buildRequest@POLYN170990"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.buildRequest@POLYN170990 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.clients.admin.internals.CoordinatorStrategy.buildRequest@POLYN170990 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/CoordinatorStrategy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
