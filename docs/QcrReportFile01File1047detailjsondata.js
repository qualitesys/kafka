console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ConnectorClientConfigOverridePolicy"
 , "c2" : "org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#30"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#35"
 , "c1" : "List&lt;ConfigValue&gt;"
 , "c2" : "validate(ConnectorClientConfigRequest)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#40"
 , "c1" : "ConfigValue"
 , "c2" : "configValue(Map.Entry&lt;String,Object&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#47"
 , "c1" : "void"
 , "c2" : "validate(ConfigValue)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#54"
 , "c1" : "String"
 , "c2" : "policyName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#56"
 , "c1" : "boolean"
 , "c2" : "isAllowed(ConfigValue)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method validate arguments ConnectorClientConfigRequest  connectorClientConfigRequest"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00035] For method validate list of called methods Object monObjet|java.util.Map connectorClientConfigRequest_clientPropsN155643"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument connectorClientConfigRequest is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method configValue arguments Map.Entry&lt;String ,Object &gt;  configEntry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument configEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method validate arguments ConfigValue  configValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument configValue is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy.validate@POLYN156342 the MagicNumber/String  'The '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy.validate@POLYN156342 the MagicNumber/String  '' policy does not allow '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy.validate@POLYN156342 the MagicNumber/String  '' to be overridden in the connector configuration.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method isAllowed arguments ConfigValue  configValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00030] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00030] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
