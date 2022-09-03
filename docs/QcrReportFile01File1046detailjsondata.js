console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java 14 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.xml" 
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
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<ConfigValue>"
 , "c2" : "validate(ConnectorClientConfigRequest)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "ConfigValue"
 , "c2" : "configValue(Map.Entry<String,Object>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "validate(ConfigValue)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "policyName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
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
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00012"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class AbstractConnectorClientConfigOverridePolicy contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method validate arguments ConnectorClientConfigRequest  connectorClientConfigRequest"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00020] For method validate list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; connectorClientConfigRequest_clientPropsN145887"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument connectorClientConfigRequest is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method configValue arguments Map.Entry&lt;String ,Object &gt;  configEntry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument configEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method validate arguments ConfigValue  configValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument configValue is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy.validate@POLYN146584 the MagicNumber/String  'The '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy.validate@POLYN146584 the MagicNumber/String  '' policy does not allow '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.connector.policy.AbstractConnectorClientConfigOverridePolicy.validate@POLYN146584 the MagicNumber/String  '' to be overridden in the connector configuration.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method isAllowed arguments ConfigValue  configValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#15"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00015] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/connector/policy/AbstractConnectorClientConfigOverridePolicy.java.html#15"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00015] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
